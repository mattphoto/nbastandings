import React, { Component } from 'react';

import { PlayoffsBracket } from './PlayoffsBracket';
import { StreakIndicator } from './StreakIndicator';
import { TeamTileExpandedPanel } from './TeamTileExpandedPanel';
import {
  TeamTile,
  StandingsContainer,
  RankStyle,
} from './styles';

import {
  gamesBackRowFactor,
} from './constants';

export class TeamTilesPlot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: -1
    };
    this.hoverTeamTile = this.hoverTeamTile.bind(this);
    this.hoverOutTeamTile = this.hoverOutTeamTile.bind(this);
  }

  hoverTeamTile(index) {
    this.setState({ hoveredIndex: index})
  }

  hoverOutTeamTile() {
    this.setState({ hoveredIndex: -1 })
  }

  render() {

    const { conferenceData } = this.props;
    const { hoveredIndex } = this.state;

    if (!conferenceData) {return null;}

    const numberOfGamesBackRows = 
    conferenceData.length 
      ? Math.floor(conferenceData[conferenceData.length-1].gamesBack) + gamesBackRowFactor + 1
      : 23;

    return (
      <div>
        { conferenceData.map( (team, index) => 
          (
          <a href={ "http://www.nba.com/" 
            + team.name.toLowerCase()
            + "/schedule" }
            target="_blank"
            key={index+"ttp"}
            onMouseEnter={ this.hoverTeamTile.bind(this, index) }
            onMouseLeave={ this.hoverOutTeamTile }
          >
            <TeamTile 
              top={ team.top } 
              left = { team.left }
              z={ team.zindex } 
              color={ team.assets[1]}
              secondaryColor={ team.assets[2] }
              key={ team.assets[0] }
            >
              <RankStyle index={index}>{ index + 1 } </RankStyle>
              <img 
                height="44"
                src={ team.assets[3] }
                alt={ team.assets[0] }
              />
              <span style={{ color: "rgba(255,255,255,.8", marginRight: '12px' }}>
                { team.assets[0] }
              </span>
              <span style={{ fontFamily: "Inconsolata", fontWeight: "700" }}>
                { team.record }
              </span>
            
              <StreakIndicator streak={conferenceData[index].currentStreak}/>

            </TeamTile>

            { hoveredIndex === index &&
              <TeamTileExpandedPanel 
                top={ team.top } 
                left = { team.left }
                primaryColor={ team.assets[1] }
                secondaryColor={ team.assets[2] }
                city = { team.city }
                name = { team.name }
                oct = { team.oct }
                nov = { team.nov }
                dec = { team.dec }
                jan = { team.jan }
                feb = { team.feb }
                mar = { team.mar }
                apr = { team.apr }
              />
            }
          </a>
          )
        )}
        <PlayoffsBracket conferenceData={conferenceData}/>
      </div>
    )

  }
}


