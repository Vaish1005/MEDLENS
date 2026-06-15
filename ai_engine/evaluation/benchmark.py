import time
from ai_engine.orchestrator.medical_orchestrator import medical_orchestrator


def benchmark_query(query):

    start = time.time()

    response = medical_orchestrator(query)

    end = time.time()

    benchmark_result = {
        "query": query,
        "response_time": round(end - start, 2),
        "response": response,
    }

    return benchmark_result


if __name__ == "__main__":

    query = "Patient has chest pain and shortness of breath"

    result = benchmark_query(query)

    print("\nBENCHMARK RESULTS\n")

    print("Query:")
    print(result["query"])

    print("\nResponse Time:")
    print(result["response_time"], "sec")
