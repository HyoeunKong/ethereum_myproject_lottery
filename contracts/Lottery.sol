pragma solidity ^0.5.8;

contract lottery{
    address public owner;

    constructor() public{
        owner = msg.sender;
    }
    
    function getSomeValue() public pure returns (uint256 value){
        return 100;
    }
}