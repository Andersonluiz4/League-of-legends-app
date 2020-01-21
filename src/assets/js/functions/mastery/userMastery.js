
const config = require('../../../json/eloAttributes.json')
export function getEloImage(tier) {
    if (tier == config.woodtier) {
      return  "/assets/eloImages/Emblem_Iron.png";
    }
    else if (tier == config.bronzeTier) {
      return "/assets/eloImages/Emblem_Bronze.png";
    }
    else if (tier == config.silverTier) {
      return "/assets/eloImages/Emblem_Silver.png";
    }
    else if (tier == config.goldTier) {
      return "/assets/eloImages/Emblem_Gold.png";
    }
    else if (tier == config.platinumTier) {
      return "/assets/eloImages/Emblem_Platinum.png";
    }
    else if (tier == config.diamondTier) {
      return "/assets/eloImages/Emblem_Diamond.png";
    }
    else if (tier == config.masterTier) {
        return "/assets/eloImages/Emblem_Master.png";
    }
    else if (tier == config.grandmasterTier) {
        return "/assets/eloImages/Emblem_Master.png";
    }
    else if (tier == config.challengerTier) {
        return "/assets/eloImages/Emblem_Challenger.png";
      }
    else {
      return ''
    }
  }
