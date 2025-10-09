import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
	.setTitle("Optio Technial Assignment Gateway")
	.setVersion("1.0")
	.addTag("optio-technical-assignment")
	.build();
