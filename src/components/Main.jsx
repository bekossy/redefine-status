import { Box, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Box maxWidth={1000} margin={"20px auto"} p={2} component={"main"}>
        <Box
          component={"div"}
          id="overview"
          data-aos="fade-left"
          m={"30px auto"}
        >
          <Typography variant="h5" gutterBottom>
            <Link href="#overview" color={"error"}>
              Overview of The Problem:
            </Link>
          </Typography>
          <Typography mb={1}>
            The fact that our designer goods do not represent wealth for
            positive utility is having more negative damage to society than we
            can fathom. This article is going to help detail why, and detail our
            solution in progress.
          </Typography>
          <Typography mb={2}>
            As individuals, once we cover our basic needs, status becomes an
            intrinsic motivator in the rest of our actions. Status comes in many
            forms. The healthiest / most enlightened cultures put the highest
            status in rewarding positive sum behavior. In global culture, luxury
            goods like a Gucci bag/belt have become widespread as top status
            symbols, reflecting vapid use of money as the highest form of
            status. It has become such common Christmas list item for broke
            young teenagers that the richest man on the planet at the time of
            this writing got his riches from selling these overpriced goods
            representing nothing more than the ability to waste money.
            Collectively this misrepresentation of true status (service to
            others) is attributing more damage to building a healthy positive
            culture than we can imagine.
          </Typography>
          <Typography mb={2}>
            Social media, our emergent global cultural production system, could
            be used collectively to unify humanity around bettering ourselves
            and others. Instead it is used to further extract youth through a
            false form of status as a service. Imagine a world where this
            wasteful spending was considered cancelable. One where we
            collectively take accountability for the capability to money to the
            positive growth of us as a species. Imagine a world where the
            designer things we wore showed off spending a lot of money to make a
            lot of positive impact. If the world you imagined only went as far
            as to redistribute the wealth of designer wear, try imagining the
            deeper cultural effects this new alignment would have.
          </Typography>
          <Box
            borderLeft={"3px solid blue"}
            fontStyle={"italic"}
            pl={2}
            maxWidth={"650px"}
            m={"0 auto"}
            textAlign={"left"}
          >
            <Typography variant="body2">
              “Over the past hundred years we have increase the global GDP
              sevenfold, yet wealth inequality continues to skyrocket and luxury
              spending grows rapidly. In order to change the failure of
              redistribution of wealth at scale, we must effectively influence
              culture and help redefine what “status” is in the modern age. This
              will ultimately change the flow of money in society as the new age
              of status being helping the world, becomes more prominent. We have
              failed at building a society which healthily distributes
              wealth/power. Given society is a collective project we are
              responsible for, we think this stems from the culture not
              supporting doing good as the highest form of status. We have more
              than enough resources, but many people without access to them, and
              a culture that motivates and glorifies overspending on vanity
              luxury goods.” - Jack Jay
            </Typography>
          </Box>
        </Box>
        <Box component={"div"} id="dive" data-aos="fade-right" m={"30px auto"}>
          <Typography variant="h5" gutterBottom>
            <Link href="#dive" color={"#ff0000"}>
              The Deeper Dive:
            </Link>
          </Typography>
          <Typography mb={2}>
            On a fundamental level once someone gets the basics covered as in
            food, water, shelter. They can start to spend their time and money
            on convenience, health, and purpose but more often than not; status
            is where a majority of surplus wealth goes.
          </Typography>
          <Typography mb={2}>
            Societally we lack an alignment of our status symbols with creating
            a better world and with bettering ourselves. This idea to change
            what we cultural see as status has been referred to as “Status
            Engineering”. What we wear is the most direct way we have to
            represent ourselves and our ideals/values. What your role model
            wears, or any person of influence is shaping the idea of status in
            that child, teenager, or adults mind.
            <br />
            <b>
              Status is what we are buying when we pay $1, $10, or even $500
              extra for a certain brand of T-Shirt irrespective of comfort.
            </b>
            <br />
          </Typography>
          <Typography mb={2}>
            The problem is not that buying status is a failure mode of an
            individual. Status is a form of positive competitive drive in
            society and a tool for respect attribution. That’s why you see Dior
            shoes in economy. This is not a miscalculation, currently the status
            from spending $1100 on shoes does have more long term value than
            things like first class because we are playing the game of
            unenlightened capitalism. The problem is that we support the status
            symbol which costs $1100 and does no good for humanity. Thus this
            expenditure is not a failure of the buyer who bought status, it is
            only misguided that we do not have designer shoes that cost $1100,
            which builds a literal house in Bangladesh (a small home can be
            built as a permanent structure for someone for this amount). We need
            higher forms of status to exist in order to progress our culture
            which will aid in the distribution of wealth and power on a systemic
            level. Once higher status objects are unveiled will these purely
            financial status seems become recognized for their tackiness and
            buying status will coincide with doing good. With no better
            alternative currently, we idolize symbols of wealth. Thus, on our
            highest display of who we are, the clothing we wear, we display 0
            creativity or care for the world in spending and instead promote
            wasting wealth for the sake of power/leverage over others, and then
            we wonder why society is misaligned to building a healthy world.
            Fashion, what we wear, is the biggest signal we have in representing
            our identity and values. If we can provide a better representation
            of status in clothing we can not only change the money used to buy
            status into doing good for the world, but we can change our core
            representation of status in society towards doing good. While the
            larger belief is that this systemic change is the real impact in
            realigning our culture towards true status, the amount of funds in
            status spending that could be redirected towards positive causes is
            also no joke.
          </Typography>
          <Box
            borderLeft={"3px solid blue"}
            fontStyle={"italic"}
            pl={2}
            maxWidth={"650px"}
            m={"20px auto"}
            textAlign={"left"}
          >
            <Typography variant="body2">
              The personal luxury goods market is projected to grow from USD
              257.26 billion in 2020 to USD 352.84 billion in 2027
            </Typography>
          </Box>
          <Box
            borderRight={"3px solid blue"}
            fontStyle={"italic"}
            pr={2}
            maxWidth={"650px"}
            m={"20px auto"}
            textAlign={"right"}
          >
            <Typography variant="body2">
              The personal luxury goods market is projected to grow from USD
              257.26 billion in 2020 to USD 352.84 billion in 2027
            </Typography>
          </Box>
          <Typography mb={2}>
            Aligning status culturally on a global scale means reattributing
            that wealth towards benefit for humanity and shifting the entire
            global view of wealth.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Main;
