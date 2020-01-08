export function getEloImage(tier) {
    if (tier == 'WOOD') {
      return  "/assets/eloImages/Emblem_Iron.png";
    }
    else if (tier == 'BRONZE') {
      return "/assets/eloImages/Emblem_Bronze.png";
    }
    else if (tier == 'SILVER') {
      return "/assets/eloImages/Emblem_Silverd.png";
    }
    else if (tier == 'GOLD') {
      return "/assets/eloImages/Emblem_Gold.png";
    }
    else if (tier == 'PLATINUM') {
      return "/assets/eloImages/Emblem_Platinum.png";
    }
    else if (tier == 'DIAMOND') {
      return "/assets/eloImages/Emblem_Diamond.png";
    }
    else if (tier == 'MASTER') {
        return "/assets/eloImages/Emblem_Master.png";
    }
    else if (tier == 'GRANDMASTER') {
        return "/assets/eloImages/Emblem_Master.png";
    }
    else if (tier == 'CHALLENGER') {
        return "/assets/eloImages/Emblem_Challenger.png";
      }
    else {
      return ''
    }
  }
