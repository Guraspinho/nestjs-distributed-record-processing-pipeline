import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class DataProcessingOptionsDto {
	@IsNotEmpty()
	@IsNumber()
	@Min(0)
	@Max(10_000_000)
	data_amount: number;

	@IsNotEmpty()
	@IsNumber()
	@Min(1)
	@Max(10_000)
	timer_in_minutes: number;
}
