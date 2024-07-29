import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { ASSETS } from "../../img";

export const NiggaEcosystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const COLORS = ["#0088FE", "#FF8042"];

  const tabs = [
    {
      number: "01",
      header: "Presale (TGE):",
      value: 30,
      content: (
        <>
          <h2>
            <span>1.</span> Presale (TGE): 30% (266,666,666,666 $NGG)
          </h2>
          <ul>
            <li>
              Securing initial funding and financing the early stages of the
              project.
            </li>
          </ul>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: "Presale (TGE)", value: 30 },
                { name: "Remaining", value: 70 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              <Cell key={`cell-0`} fill={COLORS[1]} />
              <Cell key={`cell-1`} fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      ),
    },
    {
      number: "02",
      header: "Liquidity Provision (DEX, CEX)",
      value: 25,
      content: (
        <>
          <h2>
            <span>2.</span> Liquidity Provision (DEX, CEX): 25% (222,222,222,222
            $NGG)
          </h2>
          <ul>
            <li>
              Ensuring sufficient liquidity to facilitate trading and maintain
              price stability.
            </li>
          </ul>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: "Liquidity Provision (DEX, CEX)", value: 25 },
                { name: "Remaining", value: 75 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              <Cell key={`cell-0`} fill={COLORS[1]} />
              <Cell key={`cell-1`} fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      ),
    },
    {
      number: "03",
      header: "Community Incentives and Rewards",
      value: 15,
      content: (
        <>
          <h2>
            <span>3.</span> Community Incentives and Rewards: 15%
            (133,333,333,333 $NGG)
          </h2>
          <ul>
            <li>
              Encouraging user participation through airdrops, staking rewards,
              and community events.
            </li>
          </ul>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: "Community Incentives and Rewards", value: 15 },
                { name: "Remaining", value: 85 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              <Cell key={`cell-0`} fill={COLORS[1]} />
              <Cell key={`cell-1`} fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      ),
    },
    {
      number: "04",
      header: "Marketing and Partnerships",
      value: 15,
      content: (
        <>
          <h2>
            <span>4.</span> Marketing and Partnerships: 15% (133,333,333,333
            $NGG)
          </h2>
          <ul>
            <li>
              Raising global awareness and expanding partnerships, with a
              6-month lockup and 10% distribution.
            </li>
          </ul>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: "Marketing and Partnerships", value: 15 },
                { name: "Remaining", value: 85 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              <Cell key={`cell-0`} fill={COLORS[1]} />
              <Cell key={`cell-1`} fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      ),
    },
    {
      number: "05",
      header: "Development and Foundation Operations",
      value: 10,
      content: (
        <>
          <h2>
            <span>5.</span> Development and Foundation Operations: 10%
            (88,888,888,888 $NGG)
          </h2>
          <ul>
            <li>
              Covering ongoing development, upgrades, and operational costs,
              with a 6-month lockup and 10% distribution.
            </li>
          </ul>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: "Development and Foundation Operations", value: 10 },
                { name: "Remaining", value: 90 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              <Cell key={`cell-0`} fill={COLORS[1]} />
              <Cell key={`cell-1`} fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      ),
    },
    {
      number: "06",
      header: "Early Contributors and Team",
      value: 4,
      content: (
        <>
          <h2>
            <span>6.</span> Early Contributors and Team: 4% (35,555,555,555
            $NGG)
          </h2>
          <ul>
            <li>
              Rewarding those who contributed to the early stages of the
              project.
            </li>
          </ul>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: "Early Contributors and Team", value: 4 },
                { name: "Remaining", value: 96 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              <Cell key={`cell-0`} fill={COLORS[1]} />
              <Cell key={`cell-1`} fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      ),
    },
    {
      number: "07",
      header: "Emergency Fund",
      value: 1,
      content: (
        <>
          <h2>
            <span>7.</span> Emergency Fund: 1% (8,888,888,888 $NGG)
          </h2>
          <ul>
            <li>Reserved for unforeseen circumstances and emergencies.</li>
          </ul>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: "Emergency Fund", value: 1 },
                { name: "Remaining", value: 99 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              <Cell key={`cell-0`} fill={COLORS[1]} />
              <Cell key={`cell-1`} fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      ),
    },
  ];

  return (
    <section className="nigga-ecosystem">
      <div className="custom-container">
        <div className="ecosystem-main-txt">
          <div className="ecosystem-heading" data-aos="fade-up">
            <span className="subheading">$Niggaconomics</span>
            <h2>
              Unleash the Power of Niggacoin Community
              <br />
              888,888,888,888
            </h2>
          </div>
          <div className="ecosystem-psg" data-aos="zoom-in">
            <p>
              At Niggacoin, we are dedicated to shaking up the status quo and
              using disruption as a force for good. Our cutting-edge coin
              mechanism empowers our community and fuels significant innovation.
              Join us in driving positive change through bold, innovative
              solutions.
            </p>
          </div>
        </div>
        <div className="custom-horizontal-accordian">
          <div className="accordion-wrapper" data-aos="fade-up">
            <ul className="accordion">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`tabs ${activeTab === index ? "is-active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="tab-header">
                    <div className="accordian-numbers">{tab.number}</div>
                    <div className="text">
                      <div>{tab.header}</div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-content-wrapper">{tab.content}</div>
                    <div className="tab-img">
                      <img
                        src={ASSETS.VERTICAL_ACCORDIAN_IMAGE}
                        alt="Vertical Accordion"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
