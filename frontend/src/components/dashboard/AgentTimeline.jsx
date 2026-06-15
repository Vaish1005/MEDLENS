export default function AgentTimeline({

  logs

}) {

  return (

    <div className="space-y-4">

      {logs.map((log,index) => (

        <div
          key={index}
          className="
            flex
            gap-4
          "
        >

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-cyan-500
              mt-2
            "
          />

          <div>

            <p>

              {log.message}

            </p>

            <p
              className="
                text-sm
                text-slate-500
              "
            >

              {log.timestamp}

            </p>

          </div>

        </div>

      ))}

    </div>

  );

}