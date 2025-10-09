import { Body, Controller, Post } from "@nestjs/common";
import { DataProcessorService } from "./data-processor.service";
import { DataProcessingOptionsDto } from "./dto/data-processing-options.dto";

@Controller("data-processor")
export class DataProcessorController {
	constructor(private readonly dataProcessorService: DataProcessorService) {}

	@Post()
	postProcessingOptions(@Body() requestBody: DataProcessingOptionsDto): void {
		this.dataProcessorService.postProcessingOptions(requestBody);
	}
}
