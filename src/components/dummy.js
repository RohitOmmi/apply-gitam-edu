<form className='input-form w-100'>
                            
                            <button type="button" className="btn btn-toggle mb-3 active" data-bs-toggle="button" aria-pressed="false" autocomplete="off" id="toggleButton">
                                <div className="handle"></div>
                            </button>
                            <Col md={12} >
                            <div>
                                <div className='radio-buttons'>
                                    <label className='container'><input type='radio' ></input>Indian</label>
                                    <label className='container'><input type='radio'></input>International(NRI & COI)</label>
                                </div>
                                
                                    <Col md={5}>
                                        <div>
                                            <input type='text' placeholder='full name' />
                                        </div>
                                    </Col>

                                    <Col md={5}>
                                        <div className='dropdown-div'>
                                            <div className='dropdow'>
                                                <select id="locations" name="locations" className='dropdown-input'>
                                                    <option value="campus">Campus</option>
                                                    <option value="visakhapatnam">Visakhapatnam</option>
                                                    <option value="bengaluru">bengaluru</option>
                                                </select>
                                            </div>
                                            <div className='dropdow'>
                                                <select id="degree" name="degree" className='dropdown-input'>
                                                    <option value="campus">Degree</option>
                                                    <option value="ug">UG</option>
                                                    <option value="pg">PG</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                               
                                <div className='dropdown-div'>
                                    <div className='dropdow'>
                                        <select id="school" name="school" className='dropdown-input'>
                                            <option value="Descipline">Descipline</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Architecture">Architecture</option>
                                        </select>
                                    </div>
                                    <div className='dropdow'>
                                        <select id="degree" name="degree" className='dropdown-input'>
                                            <option value="campus">interested program</option>
                                            <option value="ug">B.Tech Aerospace engineering</option>
                                            <option value="pg">B.Tech Bio-technology engineering</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='dropdown-div'>
                                    <input placeholder='Mobile number'></input>
                                    <input placeholder='OTP'></input>
                                </div>
                                <div className='dropdown'>
                                    <select id="place" name="place" className='dropdown-input'>
                                        <option value="option">Option</option>
                                        <option value="Option1">Option1</option>
                                        <option value="Option2"> Option2</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="checkbox" id="check" name="check" value="Box" />
                                    <label for="vehicle1"> By clicking Submit, you agree to receive emails, SMS, whatsapp messages and voice calls from us.</label>
                                </div>
                                <div >
                                    <button className='btn custom-button'>Sign Up</button>
                                </div>
                                </div>
                                </Col>
                           
                        </form>
                         <Col md={6}>
                         <div className='dropdown-box'>
                    //          <select id="locations" name="locations" className='dropdown-input' style={{width:"100%"}}>
                    //              <option value="campus">Campus</option>
                    //              <option value="visakhapatnam">Visakhapatnam</option>
                    //              <option value="bengaluru">bengaluru</option>
                    //          </select>
                    //      </div>
                    //  </Col>
                    //  <Col md={6}>
                    //      <div className='dropdown-box'>
                    //          <select id="degree" name="degree" className='dropdown-input' style={{width:"100%"}}>
                    //              <option value="campus">Degree</option>
                    //              <option value="ug">UG</option>
                    //              <option value="pg">PG</option>
                    //          </select>
                    //      </div>
                    //  </Col>
                    //  <Col md={6}>
                    //      <div className='dropdow'>
                    //          <select id="school" name="school" className='dropdown-input' style={{width:"100%"}}>
                    //              <option value="Descipline">Descipline</option>
                    //              <option value="Engineering">Engineering</option>
                    //              <option value="Architecture">Architecture</option>
                    //          </select>
                    //      </div>
                    //  </Col>
                    //  <Col md={6}>
                    //      <div className='dropdow'>
                    //          <select id="degree" name="degree" className='dropdown-input' style={{width:"100%"}}>
                    //              <option value="campus">interested program</option>
                    //              <option value="ug">B.Tech Aerospace engineering</option>
                    //              <option value="pg">B.Tech Bio-technology engineering</option>
                    //          </select>
                    //      </div>
                    //  </Col>