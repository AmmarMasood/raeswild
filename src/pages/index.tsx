import Layout from "../../components/Common/Layout";
import Approach from "../../components/Home/Approach";
import CustomerReviews from "../../components/Home/CustomerReviews";
import EatingHealthy from "../../components/Home/EatingHealthy";
import Hero from "../../components/Home/Hero";
import PlanFeature from "../../components/Home/PlanFeature";
import VetsAck from "../../components/Home/VetsAck";
import WhichToEat from "../../components/Home/WhichToEat";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhichToEat />
      <EatingHealthy />
      <PlanFeature />
      {/* <Approach /> */}
      <VetsAck />
      {/* <CustomerReviews /> */}
    </Layout>
  );
}
