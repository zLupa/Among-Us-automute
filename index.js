const Cap = require("cap").Cap;
const decoders = require("cap").decoders;
const PROTOCOL = decoders.PROTOCOL;
require("dotenv").config();

var c = new Cap();

var bufSize = 10 * 1024 * 1024;
var buffer = Buffer.alloc(65535);

const networkInterface = Cap.findDevice(process.env.networkInterfaceIP);
var linkType = c.open(networkInterface, "udp", bufSize, buffer);

c.setMinBytes && c.setMinBytes(0);

console.log("Program started");

c.on("packet", (nbytes) => {
  if (linkType === "ETHERNET") {
    var ret = decoders.Ethernet(buffer);

    if (ret.info.type === PROTOCOL.ETHERNET.IPV4) {
      ret = decoders.IPV4(buffer, ret.offset);

      /**
	   * Is common to games use the UDP over TCP to be more fast.
	   * TCP is slower but more reliable and secure.
	   * So, if you want more speed than reliable you should use UDP.
	   */
      if (ret.info.protocol === PROTOCOL.IP.UDP) {

		/**
		 * Here, i'm decoding the packet information. 
		 * That return things like destination port, source port and length.
     * But here, i'm looking for the magic byte.
		 */
		ret = decoders.UDP(buffer, ret.offset);
		
        let decodedPacket = buffer
          .slice(0, nbytes)
          .toString("hex")
          .toLowerCase()
		  .match(/.{1,2}/g);
		  
		/**
		 * In networking is common to have a number to identify their packets and is know by magic byte.
		 * Among Us use 70 to identify their packets to the client.
		 */
        if (decodedPacket[0] != 70) return;

		/**
		 * Here, i'm decoding the real data that Among Us are sending to us.
     * And after, converting that data into an array. 
		 */
        let decodedDataPacket = buffer
          .slice(ret.offset, nbytes)
          .toString("hex")
          .toLowerCase()
          .match(/.{1,2}/g);

		/**
		 * All the packets that are useful for us isn't bigger than 70 bytes, so we discard the rest.
		 */
        if (decodedDataPacket.length > 70) return;

		/**
		 * Here, we're detecting for patterns that match our criterals.
		 * The criterals are to detect the patterns when i votation happens and when ends.
		 */
        if (
          decodedDataPacket[15] == "ff" &&
          decodedDataPacket[16] == "ff" &&
          decodedDataPacket[17] == "ff"
        )
		  return console.log("A votation session has been started.");
		
		
        if (
          decodedDataPacket[9] == "80" &&
          decodedDataPacket[decodedDataPacket.length - 1] == "16" &&
          decodedDataPacket.length == "16"
        )
          return console.log("A votation session has been ended.");
      }
    }
  }
});
