import { Suspense, use, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import CustomerTickets from "./components/CustomerTickets";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import TaskStatus from "./components/TaskStatus";
import ResolvedTask from "./components/ResolvedTask";


const fetchCustomerData = async () => {
  const res = await fetch("/data.json");
  return res.json()
};

const customerDataPromise = fetchCustomerData();

function App() {
  const cardData = use(customerDataPromise);
  // console.log(cardData);
  const [cards, setCards] = useState(() =>
    cardData.map((card) => ({ ...card, status: "Open" }))
  );
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleCardClick = (id) => {
    let isClicked = false;
    setCards((element) =>
      element.map((card) => {


        if (card.id === id && card.status === "Open") {
          if (!isClicked) {
            toast(`🔵 ${card.title} 👉 is now In-Progress 😊`);
            setInProgressCount((element) => element + 1);
            isClicked = true;
          }
          return { ...card, status: "In-Progress" };
        }
        return card;
      })
    );
  };

  const handleComplete = (id) => {
    let isClicked = false;
    setCards((element) =>
      element.map((card) => {

        if (card.id === id && card.status === "In-Progress") {
          if (!isClicked) {
            toast(`✔️ ${card.title} has been completed ☺️`);
            setResolvedCount((element) => element + 1);
            setInProgressCount((element) => element - 1);
            isClicked = true;
          }
          return { ...card, status: "Resolved" };
        }
        return card;
      })
    );
  };

  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>

      {/* banner */}
      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      ></Banner>

      {/* customer ticket + task status + resolved task */}

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-4">
          {cards.length > 0 && (
            <div className="md:col-span-2">
              <Suspense
                fallback={
                  <span className="loading loading-dots loading-xl"></span>
                }
              >
                <CustomerTickets
                  cards={cards}
                  handleCardClick={handleCardClick}
                ></CustomerTickets>
              </Suspense>
            </div>
          )}

          <div className="flex flex-col gap-6">
            <TaskStatus
              cards={cards.filter((c) => c.status === "In-Progress")}
              handleComplete={handleComplete}
            ></TaskStatus>

            <ResolvedTask
              cards={cards.filter((c) => c.status === "Resolved")}
            ></ResolvedTask>
          </div>
        </div>
      </Container>

      {/* footer */}
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
