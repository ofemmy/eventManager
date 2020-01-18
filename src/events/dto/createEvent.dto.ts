import { IsOptional, IsString, IsEmpty, IsNotEmpty } from "class-validator";
export class CreateEventDto {
  @IsOptional()
  id: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsOptional()
  isPublished: boolean;
}
