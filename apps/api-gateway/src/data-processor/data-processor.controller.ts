import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DataProcessorService } from "./data-processor.service";
import { DataProcessingOptionsDto } from "./dto/data-processing-options.dto";

@ApiTags("Data Processor")
@Controller("data-processor")
export class DataProcessorController {
	constructor(private readonly dataProcessorService: DataProcessorService) {}

	@Post()
	@ApiOperation({
		summary: "Submit data processing options",
		description:
			"Submit data processing parameters to be queued for processing",
	})
	@ApiResponse({
		status: 201,
		description: "Processing options submitted successfully",
	})
	postProcessingOptions(@Body() requestBody: DataProcessingOptionsDto): void {
		this.dataProcessorService.postProcessingOptions(requestBody);
	}
}
