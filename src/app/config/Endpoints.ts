export class EndPoints {

    public static readonly BASE_URL: string = "http://localhost:9002";
    // static PRINT_EMPLOYEE_REPORT(userId:string):string{
    //     // return this.BASE_URL+"/reports/employeeReport/"+userId;
    //     return this.BASE_URL+"/reports/employeeReport/"+userId;
    // }
    static DOWNLOAD_EMPLOYEE_REPORT_TO_EXCEL(userId:string):string{
        // return this.BASE_URL+"/reports/employeeReport/"+userId;
        return this.BASE_URL+"/reports/employeeReportExport/"+userId;
    }
    static DOWNLOAD_EOD_REPORT_TO_EXCEL(userId:string):string{
        // return this.BASE_URL+"/reports/employeeReport/"+userId;
        return this.BASE_URL+"/reports/endofdayReport/"+userId;
    }

   
    // static GETINSERTBILLSREPORT(transactionNumber:string){
    //     return this.BASE_URL+"reports/employeeReportExport/"+transactionNumber;
    // }
    // static GETEODREPORT(storeName:string,toDay:boolean){
    //     return this.BASE_URL+"/reports/EODReportExport/"+storeName+"/"+toDay;
    // }
    static GETSTANDBANKREPORT(path:string):string{
        return this.BASE_URL+"/reports/standBankReportExport/"+path
    }
    static GETCHANGEREQUESTREPORT(path:string):string{
        return this.BASE_URL+"/reports/changeRequestReportExport/"+path
    }
    public static LIST_USERS(): string {
        return this.BASE_URL + "/userInfo/all";
    }
}