import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApiGatewayController } from "./api-gateway.controller";
import { ApiGatewayService } from "./api-gateway.service";
import { DataProcessorModule } from "./data-processor/data-processor.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ["../../../.env"],
			isGlobal: true,
		}),
		DataProcessorModule,
	],
	controllers: [ApiGatewayController],
	providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
