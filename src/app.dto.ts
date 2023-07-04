import { ArrayMinSize,IsArray,IsBoolean,IsNotEmpty,IsNumber,IsOptional,IsString, isBoolean } from "class-validator";

export class FOrmDto{
    //validates for a non-empty string
    @IsString()
    @IsNotEmpty()

    public name:String;

    //Get only validated if it's part of the request's body
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    public email:string;

    //validates for an integer
    @IsNumber()
    public age:number;

    @IsBoolean()
    public acceptedTOS:boolean;


    @IsArray()
    @IsNumber({allowNaN:false},{each:true})
    @ArrayMinSize(1)
    public nums:number[];


}