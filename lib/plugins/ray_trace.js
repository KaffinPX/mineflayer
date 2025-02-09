const { Vec3 } = require('vec3')

module.exports = (bot) => {
  function getViewDirection (pitch, yaw) {
    const csPitch = Math.cos(pitch)
    const snPitch = Math.sin(pitch)
    const csYaw = Math.cos(yaw)
    const snYaw = Math.sin(yaw)
    return new Vec3(-snYaw * csPitch, snPitch, -csYaw * csPitch)
  }

  bot.blockAtCursor = (maxDistance = 256, matcher = null) => {
    const { position, height, pitch, yaw } = bot.entity

    const eyePosition = position.offset(0, height, 0)
    const viewDirection = getViewDirection(pitch, yaw)

    return bot.world.raycast(eyePosition, viewDirection, maxDistance, matcher)
  }
}
