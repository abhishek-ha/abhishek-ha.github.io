function GetPlanTncLink(PlanCode) {
    var link = '';
    try {
        switch (PlanCode) {
            case "":
                break;
            default:
                link = '';
                break;
        }
    } catch {

    }
    return link;
}