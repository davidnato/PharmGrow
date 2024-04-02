export const routes={
    dashboard() { 
        return '/dashboard'
    },
    inventory(){
        return '/inventory'
        
    },
    addMedicine(){
        const addMedicine=this.inventory()
        return addMedicine +'/addMedicine'
    },
    medicinegroups(){
        const medicinegroup=this.inventory()
        return medicinegroup +'/medicinegroups'
    }
}