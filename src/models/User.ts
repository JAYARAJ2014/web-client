import axios, { AxiosResponse } from "axios";
import { Events } from "./Events";
import { IUserData } from "./IUserData";

export class User  {

        events: Events = new Events ();
        
        constructor(private data: IUserData) {}

        get(propertyName: string) : (string | number ){
            return this.data[propertyName];
        } 

        set(update: IUserData):void{ 
            Object.assign(this.data,update);
        }
  

        fetch(): void  {
            axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response:AxiosResponse):void =>{
                    this.set(response.data);
            });
        }

        save(): void  {
            const id = this.get('id');

            if(id) {
                axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
            } else {
                axios.post(`http://localhost:3000/users`,this.data);
            }

            
        }
}