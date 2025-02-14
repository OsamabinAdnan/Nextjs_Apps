export interface WeatherData {
    temperature:number,
    description:string,
    location:string,
    unit:string,
    icon: string;
    wind:{
        speed:number,
        deg:number
    },
    pressure:number,
    humidity:number,
    sea_level:number,
    longitute:number,
    latitude:number,
    country:string,
}