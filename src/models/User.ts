import axios, { AxiosResponse } from "axios";
import { IUserData } from "./IUserData";
type CallBack = ()=>void;

export class User  {
        events: {[key:string]: CallBack[]}={};

        constructor(private data: IUserData) {}

        get(propertyName: string) : (string | number ){
            return this.data[propertyName];
        } 

        set(update: IUserData):void{ 
            Object.assign(this.data,update);
        }
        on(eventName: string, callBack:CallBack):void{
            const handlers = this.events[eventName]||[];     
            handlers.push(callBack);
            this.events[eventName]=handlers;       
        }
        trigger(eventName: string):void {

            const handlers = this.events[eventName] ;
            if(!handlers || handlers.length===0 ){
                return ;
            }

            handlers.forEach(callBack=>{
                callBack();
            });
        }

        fetch(): void  {
            axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response:AxiosResponse):void =>{
                    this.set(response.data);
            });
        }
}