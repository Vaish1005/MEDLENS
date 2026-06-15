from fastapi import APIRouter

router = APIRouter()

dashboard_metrics = {

    "queries": 0,

    "evidence": 0,

    "agents": 6,

    "avg_response_time": 0

}


@router.get("/dashboard-metrics")
def get_dashboard_metrics():

    return dashboard_metrics

def update_metrics(

    queries=None,

    evidence=None,

    response_time=None

):

    global dashboard_metrics

    if queries is not None:

        dashboard_metrics["queries"] += queries

    if evidence is not None:

        dashboard_metrics["evidence"] += evidence

    if response_time is not None:

        dashboard_metrics[
            "avg_response_time"
        ] = response_time

    print(
        "UPDATED METRICS:",
        dashboard_metrics
    )