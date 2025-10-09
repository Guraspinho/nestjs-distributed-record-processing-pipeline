import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import { ApiGatewayModule } from "./api-gateway.module";
import { swaggerConfig } from "./swagger/swagger";

async function bootstrap() {
	const app = await NestFactory.create(ApiGatewayModule);

	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup("api-docs", app, swaggerDocument);

	app.useGlobalPipes(
		new ValidationPipe({ transform: true, whitelist: true }),
	);

	app.use(helmet());
	app.enableCors();

	await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
