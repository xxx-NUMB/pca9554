
//
enum PinModes {
    //% block="Input"
    //% block="Output"

}
namespace pca9554 {

    const PCA9554_ADDRESS  = 0x20
    const PCA9554_REG_INP  = 0x00
    const PCA9554_REG_OUT  = 0x01
    const PCA9554_REG_POL  = 0x02
    const PCA9554_REG_CTRL = 0x03

  m_inp = readRegister(PCA9554_ADDRESS, PCA9554_REG_INP);
  m_out = readRegister(PCA9554_ADDRESS, PCA9554_REG_OUT);
  m_pol = readRegister(PCA9554_ADDRESS, PCA9554_REG_POL);
  m_ctrl = readRegister(PCA9554_ADDRESS, PCA9554_REG_CTRL);

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2ccmd(addr: number, value: number) {
        let buf2 = pins.createBuffer(1)
        buf2[0] = value
        pins.i2cWriteBuffer(addr, buf2)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function pca9554_PinMode(pin: number, mode:string) {

    }
}