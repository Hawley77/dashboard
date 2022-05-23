import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
