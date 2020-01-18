import { IsOptional, IsString, IsEmpty, IsNotEmpty } from "class-validator";
export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsOptional()
  isPublished: boolean;
}
