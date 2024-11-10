// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Token is ERC20{

        constructor() ERC20("ARC Token","ARC") {
             _mint(msg.sender,1000000000000000*10**uint(decimals()));
        }

}