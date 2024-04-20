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
    medicineslist(){
        const medicinelist=this.inventory()
        return medicinelist + '/medicinesList'
    },
    medicineDetail(){
        const medicinegroup=this.inventory()
        return medicinegroup +'/medicinedetail'
    },
    medicinegroups(){
        const medicinegroup=this.inventory()
        return medicinegroup +'/medicinegroups'
    },
    analysis(){
        return '/analysis'
    },
    configuration(){
        return '/report'
    },
    report(){
        return '/report'
    },
    account(){
        return '/report'
    },
    chat(){
        return '/report'
    },
    notification(){
        return '/report'
    },
    settings(){
        return '/settings'
    },
    help(){
        return '/report'
    },
    revenue(){
        return '/revenue'
    },
    available(){
        return '/avalable'
    },
    notavailable(){
        return './notavailable'
    },
    management(){
        return'./management'
    }
}