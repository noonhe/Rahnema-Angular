import { InMemoryDbService } from 'angular-in-memory-web-api';


export class ProjectsData implements InMemoryDbService {
    createDb() {
        const projects = [
            {
                projectDetailes:{
                    projectName: 'project one',
                    projectOwner: 'loop',
                    customerName: 'John Doe',
                    phone: '555-55555',
                    email: 'john@doe.com',
                    website: 'loop.com'
                },
                projectSettings:{
                    email: 'john@doe.com',
                    language:'English',
                    timezone:'',
                    communication:'SMS'
                },
                AddressDetails:{
                    addressLine1:'address1',
                    addressLine2:'address2',
                    postCode:'123',
                    city:'Scranton',
                    state:'Pensilvania',
                    country:'USA'
                }
            },
        ];
        return { projects };
    }
}