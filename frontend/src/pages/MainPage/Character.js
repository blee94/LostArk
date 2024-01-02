import { useState } from 'react';
import axios from 'axios';
import '../../css/Character.css';

function Character() {
  const [characterName, setCharacterName] = useState('');
  const [characterInfo, setCharacterInfo] = useState(null);

  const requestBtn = async () => {
    try {
      const response = await axios.get(
        `https://developer-lostark.game.onstove.com/armories/characters/${characterName}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization:
              'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNjAyMzMifQ.mDI-PXkRUyTZkbptYmcN3OYgkhSIgNylQ_TTQcbUI9sD8-kUUswU-UaUctae2VNQf4xh1JRlhL6PxiBuSgX0jkh1RYt6XcyWfunwrlF4ulXwkQBbZFMSI22fb86A6qLspI9eloATHnrWIGVvhJyn_pGXhuMy7OQSmEeZuVUhhkv3MPfK1JBHn5M1aHnCv0msRWuc4Pw-6Do_jiT0JqhXFd-ctLhHwH4Osh1Frfjb1YOYhKIe9_uM3K5kv9beUex2pb7wOoCncNbnpq0oSyrDojGPZ8t8ctQhiVD5DPL7McWf-vgFBGbxppIzucbg93xrqOXG-csWQPmXRpdm7U9chg',
          },
        }
      );

      // console.log(response.data);
      setCharacterInfo(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setCharacterName(event.target.value);
  };
  console.log(characterInfo);
  return (
    <>
      <div className='mainContainer'>
        <div className='CNavContainer'>
          <div className='CNav Nav1'>캐릭터</div>
          <div className='CNav Nav2'>장비</div>
          <div className='CNav Nav3'>보석</div>
          <div className='CNav Nav4'>카드</div>
          <div className='CNav Nav5'>각인</div>
        </div>
        <div className='ContainerMyPage'>
          <div className='searchBox'>
            <input
              type='text'
              name='character'
              id='character'
              value={characterName}
              onChange={handleInputChange}
            />
            <button type='button' onClick={requestBtn}>
              검색
            </button>
          </div>
          {characterInfo && (
            <>
              <div className='Conatainer01'>
                {/* <div className='ontainer01_Sub1'> */}
                <img
                  className='imgMainC'
                  src={characterInfo.ArmoryProfile.CharacterImage}
                  alt='Character'
                  style={{ maxWidth: '500px', maxHeight: '500px' }}
                />
                {/* </div> */}
                <div className='Container01_Sub2'>
                  <div>서버: {characterInfo.ArmoryProfile.ServerName}</div>
                  <div>
                    직업: {characterInfo.ArmoryProfile.CharacterClassName}
                  </div>
                  <div>닉네임: {characterInfo.ArmoryProfile.CharacterName}</div>
                  <div>칭호: {characterInfo.ArmoryProfile.Title}</div>
                  <div>
                    아이템 레벨: {characterInfo.ArmoryProfile.ItemAvgLevel}
                  </div>
                  <div>
                    원정대 레벨: {characterInfo.ArmoryProfile.ExpeditionLevel}
                  </div>
                </div>
              </div>
              {characterInfo.ArmoryEquipment &&
                characterInfo.ArmoryEquipment.length > 0 && (
                  <div>
                    장비
                    <img
                      src={characterInfo.ArmoryEquipment[0].Icon}
                      alt='Weapon'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[1].Icon}
                      alt='Head'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[2].Icon}
                      alt='Shirts'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[3].Icon}
                      alt='Pants'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[4].Icon}
                      alt='Gloves'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[5].Icon}
                      alt='Shoulder'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[6].Icon}
                      alt='Neckless'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[7].Icon}
                      alt='Earing'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[8].Icon}
                      alt='Earing'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[9].Icon}
                      alt='Ring'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[10].Icon}
                      alt='Ring'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[11].Icon}
                      alt='Stone'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryEquipment[12].Icon}
                      alt='Bracelet'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                )}
              {characterInfo.ArmoryGem &&
                characterInfo.ArmoryGem.Gems &&
                characterInfo.ArmoryGem.Gems.length > 0 && (
                  <div>
                    보석
                    <img
                      src={characterInfo.ArmoryGem.Gems[0].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[1].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[2].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[3].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[4].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[5].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[6].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[7].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[8].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[9].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <img
                      src={characterInfo.ArmoryGem.Gems[10].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                )}
              {characterInfo.ArmoryGem &&
                characterInfo.ArmoryGem.Effects &&
                characterInfo.ArmoryGem.Effects.length > 0 && (
                  <div>
                    보석정보
                    <div>{characterInfo.ArmoryGem.Effects[0].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[0].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[1].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[1].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[2].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[2].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[3].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[3].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[4].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[4].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[5].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[5].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[6].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[6].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[7].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[7].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[8].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[8].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[9].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[9].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryGem.Effects[10].Name}</div>
                    <img
                      src={characterInfo.ArmoryGem.Effects[10].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                )}
              {characterInfo.ArmoryAvatars &&
                characterInfo.ArmoryGem.length > 0 && (
                  <div>
                    아바타
                    <div>{characterInfo.ArmoryAvatars[0].Name}</div>
                    <img
                      src={characterInfo.ArmoryAvatars[0].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryAvatars[1].Name}</div>
                    <img
                      src={characterInfo.ArmoryAvatars[1].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryAvatars[2].Name}</div>
                    <img
                      src={characterInfo.ArmoryAvatars[2].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryAvatars[3].Name}</div>
                    <img
                      src={characterInfo.ArmoryAvatars[3].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                )}
              {characterInfo.ArmoryCard &&
                characterInfo.ArmoryCard.Cards &&
                characterInfo.ArmoryCard.Cards.length > 0 && (
                  <div>
                    카드
                    <div>{characterInfo.ArmoryCard.Cards[0].Name}</div>
                    <img
                      src={characterInfo.ArmoryCard.Cards[0].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryCard.Cards[1].Name}</div>
                    <img
                      src={characterInfo.ArmoryCard.Cards[1].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryCard.Cards[2].Name}</div>
                    <img
                      src={characterInfo.ArmoryCard.Cards[2].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryCard.Cards[3].Name}</div>
                    <img
                      src={characterInfo.ArmoryCard.Cards[3].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryCard.Cards[4].Name}</div>
                    <img
                      src={characterInfo.ArmoryCard.Cards[4].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryCard.Cards[5].Name}</div>
                    <img
                      src={characterInfo.ArmoryCard.Cards[5].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                )}

              <div>
                카드 효과
                <div>{characterInfo.ArmoryCard.Effects[0].Items[0].Name}</div>
                <div>
                  {characterInfo.ArmoryCard.Effects[0].Items[0].Description}
                </div>
                <div>{characterInfo.ArmoryCard.Effects[0].Items[1].Name}</div>
                <div>
                  {characterInfo.ArmoryCard.Effects[0].Items[1].Description}
                </div>
                <div>{characterInfo.ArmoryCard.Effects[0].Items[2].Name}</div>
                <div>
                  {characterInfo.ArmoryCard.Effects[0].Items[2].Description}
                </div>
                <div>{characterInfo.ArmoryCard.Effects[0].Items[3].Name}</div>
                <div>
                  {characterInfo.ArmoryCard.Effects[0].Items[3].Description}
                </div>
                <div>{characterInfo.ArmoryCard.Effects[0].Items[4].Name}</div>
                <div>
                  {characterInfo.ArmoryCard.Effects[0].Items[4].Description}
                </div>
              </div>

              {characterInfo.ArmoryEngraving &&
                characterInfo.ArmoryEngraving.Effects &&
                characterInfo.ArmoryEngraving.Effects.length > 0 && (
                  <div>
                    각인
                    <div>{characterInfo.ArmoryEngraving.Effects[0].Name}</div>
                    <img
                      src={characterInfo.ArmoryEngraving.Effects[0].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryEngraving.Effects[1].Name}</div>
                    <img
                      src={characterInfo.ArmoryEngraving.Effects[1].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryEngraving.Effects[2].Name}</div>
                    <img
                      src={characterInfo.ArmoryEngraving.Effects[2].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryEngraving.Effects[3].Name}</div>
                    <img
                      src={characterInfo.ArmoryEngraving.Effects[3].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    <div>{characterInfo.ArmoryEngraving.Effects[4].Name}</div>
                    <img
                      src={characterInfo.ArmoryEngraving.Effects[4].Icon}
                      alt='Gem'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Character;
