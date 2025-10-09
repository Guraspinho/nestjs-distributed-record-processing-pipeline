import { Injectable } from "@nestjs/common";
import { DataProcessingOptionsDto } from "./dto/data-processing-options.dto";

@Injectable()
export class DataProcessorService {
	postProcessingOptions(options: DataProcessingOptionsDto): void {
		// ...
	}
}
