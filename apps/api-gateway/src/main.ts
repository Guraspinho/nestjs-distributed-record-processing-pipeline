import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";
import { ApiGatewayModule } from "./api-gateway.module";

async function bootstrap() {
	const app = await NestFactory.create(ApiGatewayModule);

	app.useGlobalPipes(
		new ValidationPipe({ transform: true, whitelist: true }),
	);

	app.use(helmet());
	app.enableCors();

	await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
