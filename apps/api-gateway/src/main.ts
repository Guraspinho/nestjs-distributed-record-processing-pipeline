import { ConfigModule } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { ApiGatewayModule } from "./api-gateway.module";

ConfigModule.forRoot();

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		ApiGatewayModule,
		{
			transport: Transport.RMQ,
			options: {
				urls: [
					`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
				],
				queue: process.env.RABBITMQ_QUEUE_NAME,
				queueOptions: {
					durable: true,
				},
				prefetchCount: parseInt(
					process.env.RABBITMQ_PREFETCH_COUNT,
					10,
				),
				noAck: false,
			},
		},
	);

	await app.listen();
}
bootstrap();
