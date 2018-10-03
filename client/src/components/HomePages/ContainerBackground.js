import React, { Component } from 'react';

class ContainerBackground extends Component {
      render() {
            return (
                  <div className="container background">
                        <div className="row">
                              <div className="col-sm-6 left-background">
                                    <h1>Your favourite restaurants, delivered fast to your door.</h1>
                                    <div>
                                          <form className='form-group'>
                                                <label>Chọn nơi ở của bạn:</label>
                                                <div>
                                                      <select className='form-control'>
                                                            <option> </option>
                                                            <option>Quận Ninh Kiều</option>
                                                            <option>Quận Bình Thủy</option>
                                                            <option>Quận Cái Răng</option>
                                                            <option>Quận Ô Môn</option>
                                                            <option>Quận Thốt Nốt</option>
                                                      </select>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }
}

export default ContainerBackground;