import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class DataProcessingOptionsDto {
	@ApiProperty({
		description: "Amount of data to process",
		minimum: 0,
		maximum: 10_000_000,
		example: 1000,
	})
	@IsNotEmpty()
	@IsNumber()
	@Min(0)
	@Max(10_000_000)
	data_amount: number;

	@ApiProperty({
		description: "Processing timer in minutes",
		minimum: 1,
		maximum: 10_000,
		example: 5,
	})
	@IsNotEmpty()
	@IsNumber()
	@Min(1)
	@Max(10_000)
	timer_in_minutes: number;
}
