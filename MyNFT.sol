// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    string private _myBaseURI;
    uint256 private _tokenIdTracker;

    constructor(string memory name, string memory symbol, string memory baseURI) ERC721(name, symbol) {
        _myBaseURI = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _myBaseURI;
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _myBaseURI = baseURI;
    }

    function mint(address to) external {
         uint256 newTokenId = _tokenIdTracker + 1;
        _safeMint(to, newTokenId);
        _tokenIdTracker = newTokenId;
    }
}
