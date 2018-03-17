import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ label, weapon, score, loading }) => (
  <StyledPlayer>
    <div className={'name'}>{label}</div>
    <Weapon icon={weapon} loading={loading}/>
    <div className={'score'}>{score}</div>
  </StyledPlayer>
)

Player.proptTypes = {
  label: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  score: PropTypes.string,
  loading: PropTypes.bool
}

export default Player
