import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApiGatewayController } from "./api-gateway.controller";
import { ApiGatewayService } from "./api-gateway.service";
import { DataProcessorModule } from "./data-processor/data-processor.module";
import { RabbitmqService } from './rabbitmq/rabbitmq.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ["../../../.env"],
			isGlobal: true,
		}),
		DataProcessorModule,
		RabbitmqModule,
	],
	controllers: [ApiGatewayController],
	providers: [ApiGatewayService, RabbitmqService],
})
export class ApiGatewayModule {}
