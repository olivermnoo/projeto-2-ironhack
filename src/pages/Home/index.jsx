import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TabBox } from "../../components/TabBox";
import { api } from "../../utils/api";

export function Home() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    async function fetchTabs() {
      try {
        const response = await api.get("/tabs");

        setTabs(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTabs();
  }, []);

  return (
    <>
      <div className="h-20"></div>
      <div className="w-auto flex flex-col gap-3 items-center content-center">
        {tabs.map((currentTabs) => {
          return (
            <Link
              to={`/tabdetails/${currentTabs.id}`}
              className="w-auto "
              key={currentTabs.id}
            >
              <TabBox tab={currentTabs.attributes} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
