import { useState } from 'react';
import axios from 'axios';
import '../../css/Character.css';

function Character() {
  const [characterName, setCharacterName] = useState('');
  const [characterInfo, setCharacterInfo] = useState(null);
  const [activeTab, setActiveTab] = useState('Nav1');

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭된 탭으로 상태 변경
  };

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
          <div
            className={activeTab === 'Nav1' ? 'CNav active' : 'CNav'}
            onClick={() => handleTabClick('Nav1')}
          >
            캐릭터
          </div>
          <div
            className={activeTab === 'Nav2' ? 'CNav active' : 'CNav'}
            onClick={() => handleTabClick('Nav2')}
          >
            장비
          </div>
          <div
            className={activeTab === 'Nav3' ? 'CNav active' : 'CNav'}
            onClick={() => handleTabClick('Nav3')}
          >
            보석
          </div>
          <div
            className={activeTab === 'Nav4' ? 'CNav active' : 'CNav'}
            onClick={() => handleTabClick('Nav4')}
          >
            카드
          </div>
          <div
            className={activeTab === 'Nav5' ? 'CNav active' : 'CNav'}
            onClick={() => handleTabClick('Nav5')}
          >
            각인
          </div>
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
              {/* 메인 */}
              <div
                className={
                  activeTab === 'Nav1'
                    ? 'Conatainer01 ContainerBig'
                    : 'Conatainer01 ContainerBig hidden'
                }
              >
                <div className='Container01_Sub1'>
                  <img
                    className='imgMainC'
                    src={characterInfo.ArmoryProfile.CharacterImage}
                    alt='Character'
                    style={{
                      maxWidth: '500px',
                      maxHeight: '500px',
                      top: '10px',
                    }}
                  />
                </div>
                <div className='Container01_Sub2'>
                  <div>닉네임: {characterInfo.ArmoryProfile.CharacterName}</div>
                  <div>서버: {characterInfo.ArmoryProfile.ServerName}</div>
                  <div>
                    직업: {characterInfo.ArmoryProfile.CharacterClassName}
                  </div>
                  <div>
                    칭호: {characterInfo.ArmoryProfile.Title || '미설정'}
                  </div>
                  <div>
                    아이템 레벨: {characterInfo.ArmoryProfile.ItemAvgLevel}
                  </div>
                  <div>
                    원정대 레벨: {characterInfo.ArmoryProfile.ExpeditionLevel}
                  </div>
                </div>
              </div>
              {/* 장비 */}
              <div
                className={
                  activeTab === 'Nav2'
                    ? 'Conatainer02 ContainerBig'
                    : 'Conatainer02 ContainerBig hidden'
                }
              >
                {characterInfo.ArmoryEquipment &&
                  characterInfo.ArmoryEquipment.length > 0 && (
                    <div className='Container02_Sub1'>
                      {characterInfo.ArmoryEquipment.map((equipment, index) => (
                        <div key={index}>
                          <div className='Equip'>{equipment.Name}</div>
                          <img
                            key={index}
                            src={equipment.Icon}
                            alt={`장비 ${index}`}
                            style={{ width: '70px', height: '70px' }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
              </div>
              {/* 보석 */}
              <div
                className={
                  activeTab === 'Nav3'
                    ? 'Conatainer03 ContainerBig'
                    : 'Conatainer03 ContainerBig hidden'
                }
              >
                <div className='Container03_Sub1'>
                  {characterInfo.ArmoryGem &&
                    characterInfo.ArmoryGem.Gems &&
                    characterInfo.ArmoryGem.Gems.length > 0 && (
                      <div>
                        {characterInfo.ArmoryGem.Gems.map((gem, index) => (
                          <img
                            key={index}
                            src={gem.Icon}
                            alt={`Gem ${index}`}
                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                          />
                        ))}
                      </div>
                    )}
                </div>
                {/* 보석정보 */}
                <div className='Container03_Sub2'>
                  {characterInfo.ArmoryGem &&
                    characterInfo.ArmoryGem.Effects &&
                    characterInfo.ArmoryGem.Effects.length > 0 && (
                      <div>
                        {characterInfo.ArmoryGem.Effects.map(
                          (effect, index) => (
                            <div key={index}>
                              <img
                                src={effect.Icon}
                                alt={`Gem ${index}`}
                                style={{
                                  maxWidth: '100px',
                                  maxHeight: '100px',
                                }}
                              />
                              <div className='effectName'>{effect.Name}</div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>
              </div>
              {/* 카드 */}
              <div
                className={
                  activeTab === 'Nav4'
                    ? 'Conatainer04 ContainerBig'
                    : 'Conatainer04 ContainerBig hidden'
                }
              >
                <div className='Container04_Sub1'>
                  {characterInfo.ArmoryCard &&
                    characterInfo.ArmoryCard.Cards &&
                    characterInfo.ArmoryCard.Cards.length > 0 && (
                      <div>
                        {characterInfo.ArmoryCard.Cards.map((card, index) => (
                          <div key={index}>
                            <div>{card.Name}</div>
                            <img
                              src={card.Icon}
                              alt={`Card ${index}`}
                              style={{ maxWidth: '200px', maxHeight: '300px' }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                </div>
                {/* 카드정보 */}
                <div className='Container04_Sub2'>
                  {characterInfo.ArmoryCard &&
                    characterInfo.ArmoryCard.Effects &&
                    characterInfo.ArmoryCard.Effects.length > 0 && (
                      <div>
                        {characterInfo.ArmoryCard.Effects[0].Items.map(
                          (item, index) => (
                            <div key={index}>
                              <div className='cardName'>{item.Name}</div>
                              <div>{item.Description}</div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>
              </div>
              {/* 각인 */}
              <div
                className={
                  activeTab === 'Nav5'
                    ? 'Conatainer05 ContainerBig'
                    : 'Conatainer05 ContainerBig hidden'
                }
              >
                {characterInfo.ArmoryEngraving &&
                  characterInfo.ArmoryEngraving.Effects &&
                  characterInfo.ArmoryEngraving.Effects.length > 0 && (
                    <div className='Container05_Sub1'>
                      {characterInfo.ArmoryEngraving.Effects.map(
                        (effect, index) => (
                          <div key={index}>
                            <div>{effect.Name}</div>
                            <img
                              src={effect.Icon}
                              alt='Gem'
                              style={{ maxWidth: '100px', maxHeight: '100px' }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Character;
