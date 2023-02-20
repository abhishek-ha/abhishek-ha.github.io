function GetPlanTncLink(PlanCode) {
    var link = '';
    try {
        switch (PlanCode) {
            case "CashPlan01":
                link = 'https://live.healthassure.in/Products/files/AssureOne-Advance-TnC.pdf';
                break;

            case "CashPlan03":
                link = 'https://live.healthassure.in/Products/files/AssureOne-Protect-TnC.pdf';
                break;

            case "CashPlan05":
                link = 'https://live.healthassure.in/Products/files/AssureOne-Advance-New-TnC.pdf';
                break;

            case "Cashplan06":
                link = 'https://live.healthassure.in/Products/files/AssureOne-Protect-New-TnC.pdf';
                break;

            case "FreePock02":
                link = 'https://live.healthassure.in/Products/files/Hospicash-TnC-freecharge.pdf';
                break;

            case "HAOPDR003-60":
                link = 'https://live.healthassure.in/Products/files/Digital-Trial-Plan-TnC.pdf';
                break;

            case "HAOPDR003-59":
                link = 'https://live.healthassure.in/products/Files/FitAssure_Plan_Tnc.pdf';
                break;

            case "HAOPDR003-54":
                link = 'https://live.healthassure.in/products/Files/FitAssure_non_hospicash.pdf';
                break;

            case "HAOPDR003-49":
                link = 'https://live.healthassure.in/products/files/FitAssure_Plus_tnc.pdf';
                break;

            case "HAOPDR003-61":
                link = 'https://live.healthassure.in/Products/files/FitAssure-Protect.pdf';
                break;

            case "PLANGIBL":
                link = 'https://live.healthassure.in/products/Files/GIBL_unlimited_tele_T&C.pdf';
                break;

            case "MERAGOLD02":
                link = 'https://live.healthassure.in/Products/files/MeraBima-tnc.pdf';
                break;

            case "MAGMA01":
                link = 'https://live.healthassure.in/Products/files/Quick-tele-plans-tnc.pdf';
                break;

            case "MAGMA02":
                link = 'https://live.healthassure.in/Products/files/Quick-tele-plans-tnc.pdf';
                break;

            case "MAGMA03":
                link = 'https://live.healthassure.in/Products/files/Quick-tele-plans-tnc.pdf';
                break;

            case "PLANOKAY01":
                link = 'https://live.healthassure.in/Products/files/okay-gp-tnc.pdf';
                break;

            case "PLANOKAY02":
                link = 'https://live.healthassure.in/Products/files/ok-gp-specialist-tnc.pdf';
                break;

            case "PLANOKAY03":
                link = 'https://live.healthassure.in/products/files/Okay-Insta-Protect-tnc.pdf';
                break;

            case "PAYW01":
                link = 'https://live.healthassure.in/Products/files/Payworld-unlimited-tele-tnc.pdf';
                break;

            case "FreePock01":
                link = 'https://live.healthassure.in/Products/files/Hospicash-TnC-freecharge.pdf';
                break;

            case "FreePock02":
                link = 'https://live.healthassure.in/Products/files/Hospicash-TnC-freecharge.pdf';
                break;

            case "HAOPDR00U40":
                link = 'https://live.healthassure.in/Products/files/TnC-ultima-grand.pdf';
                break;

            case "HAOPDR00U43":
                link = 'https://live.healthassure.in/Products/files/TnC-ultima-grand-Protect.pdf';
                break;

            case "ABHI04":
                link = 'https://live.healthassure.in/products/Files/UMICORE_unlimited_teledoc_T&C.pdf';
                break;

            case "PLANYARI":
                link = 'https://live.healthassure.in/products/Files/YARIKUL_unlimited_teledoc_T&C.pdf';
                break;

            case "PLANDIVI01":
                link = 'https://live.healthassure.in/Products/files/Diversified-Solutions-unlimited-tele-tnc.pdf';
                break;
            case "Cashplan07":
                link = 'https://live.healthassure.in/Products/files/AssureOne-Family-Protect-TnC.pdf';
                break;
            case "HAOPDR003-63":
                link = 'https://live.healthassure.in/products/files/FitAssure-PLatinum-TnC.pdf';
                break;
            case "HAOPDR003-64":
                link = 'https://live.healthassure.in/Products/files/FitAssure-Hospicash-WD-TnC.pdf';
                break;
            case "HAOPDR003-65":
                link = 'https://live.healthassure.in/Products/files/FitAssure-Plus-WD-TnC.pdf';
                break;
            case "HAOPDR003-67":
                link = "https://live.healthassure.in/Products/files/FitAssure-PLatinum-Plus-wd-TnC.pdf";
                break;
            case "HAOPDR003-66":
                link = 'https://live.healthassure.in/Products/files/FitAssure-Protect-WD-TnC.pdf';
                break;
            case "Caretele01":
                link = "https://www.healthassure.in/Products/files/TnC-CARE-Tele.pdf";
                break;
            case "HAOPDR00U46":
                link = "https://live.healthassure.in/Products/files/Platinum_Ultima_Suraksha_T&C.pdf";
                break;
            default:
                link = '';
                break;
        }
    } catch {

    }
    return link;
}