import Layout from "../../components/Common/Layout";
import Approach from "../../components/Home/Approach";
import CustomerReviews from "../../components/Home/CustomerReviews";
import EatingHealthy from "../../components/Home/EatingHealthy";
import Hero from "../../components/Home/Hero";
import PlanFeature from "../../components/Home/PlanFeature";
import VetsAck from "../../components/Home/VetsAck";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <EatingHealthy />
      <Approach />
      <PlanFeature />
      <VetsAck />
      <CustomerReviews />
    </Layout>
  );
}
