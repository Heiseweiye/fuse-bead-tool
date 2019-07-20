var samplePalette = [
    { name: 'C1', color: 'd3ffd4' },
    { name: 'B16', color: 'ccffaa' },
    { name: 'B13', color: 'c7ff85' },
    { name: 'B18', color: 'ddff53' },
    { name: 'B10', color: '81ffe3' },
    { name: 'B3', color: '95ff87' },
    { name: 'B2', color: '9be113' },
    { name: 'B14', color: 'dcff37' },
    { name: 'B7', color: '2ed296' },
    { name: 'B6', color: '1df2a4' },
    { name: 'B4', color: '51ff51' },
    { name: 'B1', color: 'd6e80d' },
    { name: 'B12', color: '008753' },
    { name: 'B8', color: '009b3a' },
    { name: 'B5', color: '05c900' },
    { name: 'B17', color: '97d308' },
    { name: 'B9', color: '0f4e01' },
    { name: 'B15', color: '136500' },
    { name: 'B11', color: '578a20' },
    { name: 'B23', color: '32451d' },
    { name: 'B19', color: '00d0a1' },
    { name: 'B20', color: 'c4ffd7' },
    { name: 'B21', color: '157c74' },
    { name: 'B22', color: '055352' },
    { name: 'B24', color: 'e4fb9f' },
    { name: 'C14', color: 'e0fff9' },
    { name: 'C3', color: 'bcf2ff' },
    { name: 'C13', color: 'cde8ff' },
    { name: 'D16', color: 'ece5ff' },
    { name: 'C2', color: 'abfffa' },
    { name: 'C4', color: '6ddbff' },
    { name: 'C6', color: '7cccff' },
    { name: 'D17', color: 'b3c7ff' },
    { name: 'C15', color: '00cbd2' },
    { name: 'C10', color: '09bfed' },
    { name: 'C7', color: '068ce9' },
    { name: 'D11', color: 'd2cdff' },
    { name: 'C11', color: '00c4d0' },
    { name: 'C8', color: '1b70ef' },
    { name: 'D3', color: '0f50b0' },
    { name: 'D1', color: 'bdc3ff' },
    { name: 'C5', color: '00b4e1' },
    { name: 'C9', color: '3e56cf' },
    { name: 'D4', color: '123178' },
    { name: 'D2', color: '8a92e7' },
    { name: 'C17', color: '4ad2e2' },
    { name: 'C16', color: '3970ae' },
    { name: 'C12', color: '1a3758' },
    { name: 'C18', color: '0d3d46' },
    { name: 'C19', color: '008f9c' },
    { name: 'C20', color: '1471b9' },
    { name: 'C21', color: 'b1ddff' },
    { name: 'A11', color: 'ffc580' },
    { name: 'A1', color: 'ffeea9' },
    { name: 'A2', color: 'ffffcc' },
    { name: 'A3', color: 'ffef38' },
    { name: 'A12', color: 'ffb477' },
    { name: 'A6', color: 'ffa800' },
    { name: 'A5', color: 'ffd200' },
    { name: 'A4', color: 'ffea00' },
    { name: 'F1', color: 'ff8d77' },
    { name: 'A9', color: 'ff9600' },
    { name: 'A13', color: 'ff8a00' },
    { name: 'A8', color: 'e0b83d' },
    { name: 'F2', color: 'ff4723' },
    { name: 'A14', color: 'ff4e00' },
    { name: 'A7', color: 'ff6c00' },
    { name: 'A10', color: 'ff8400' },
    { name: 'F3', color: 'ff4e00' },
    { name: 'F12', color: 'ff5c77' },
    { name: 'F4', color: 'ff5858' },
    { name: 'F9', color: 'ff9191' },
    { name: 'F7', color: '801717' },
    { name: 'F8', color: 'd50000' },
    { name: 'F5', color: 'ff0000' },
    { name: 'F13', color: 'df632d' },
    { name: 'F14', color: 'ffab95' },
    { name: 'A15', color: 'ffec1c' },
    { name: 'F15', color: 'e70000' },
    { name: 'A19', color: 'ff7859' },
    { name: 'A16', color: 'ffe776' },
    { name: 'A17', color: 'ffd200' },
    { name: 'A18', color: 'ffae4f' },
    { name: 'D8', color: 'f6cdff' },
    { name: 'E2', color: 'ffc7f4' },
    { name: 'E8', color: 'ffdaed' },
    { name: 'E1', color: 'ffcddb' },
    { name: 'D9', color: 'ddcdff' },
    { name: 'D12', color: 'ec94d4' },
    { name: 'E3', color: 'ff8cb2' },
    { name: 'E15', color: 'f7d1c9' },
    { name: 'D6', color: 'ab73ff' },
    { name: 'D18', color: 'be5bf1' },
    { name: 'E12', color: 'ffa0cf' },
    { name: 'E4', color: 'f55784' },
    { name: 'D7', color: '7927ce' },
    { name: 'D6', color: 'ca45de' },
    { name: 'E9', color: 'ff6cd0' },
    { name: 'E5', color: 'ff48a2' },
    { name: 'D15', color: '360ea6' },
    { name: 'D13', color: 'cc3cb6' },
    { name: 'E10', color: 'f12895' },
    { name: 'E6', color: 'ff3e79' },
    { name: 'D10', color: '4f0675' },
    { name: 'D14', color: '8e1caf' },
    { name: 'E13', color: 'de077b' },
    { name: 'E7', color: 'cd0656' },
    { name: 'D21', color: '9810a0' },
    { name: 'D20', color: 'c135df' },
    { name: 'D19', color: 'ffd8f7' },
    { name: 'D22', color: '1e009d' },
    { name: 'D23', color: 'e8dcff' },
    { name: 'E19', color: 'ffbee4' },
    { name: 'E18', color: 'ffbed5' },
    { name: 'E17', color: 'ffd7e7' },
    { name: 'E14', color: 'ffd3af' },
    { name: 'E11', color: 'ffd9c7' },
    { name: 'G1', color: 'ffeace' },
    { name: 'H13', color: 'e6d3b8' },
    { name: 'G2', color: 'ffcaa6' },
    { name: 'G3', color: 'ffc47e' },
    { name: 'G16', color: 'ffe3c3' },
    { name: 'H12', color: 'fff2e2' },
    { name: 'G5', color: 'f3985b' },
    { name: 'G4', color: 'd2a87e' },
    { name: 'G9', color: 'f2d088' },
    { name: 'G15', color: 'fff5dc' },
    { name: 'G6', color: 'e97825' },
    { name: 'G13', color: 'ad6e40' },
    { name: 'G10', color: 'c7900c' },
    { name: 'G11', color: 'd9bf82' },
    { name: 'F6', color: 'b53710' },
    { name: 'F10', color: '8e430c' },
    { name: 'G7', color: 'ac5616' },
    { name: 'G12', color: 'c7a365' },
    { name: 'F11', color: '6e1f06' },
    { name: 'G8', color: '763a05' },
    { name: 'G17', color: '553f2b' },
    { name: 'G14', color: '885930' },
    { name: 'G18', color: 'ffe1c9' },
    { name: 'G19', color: 'da710a' },
    { name: 'G20', color: 'a93209' },
    { name: 'E16', color: 'ffd8c9' },
    { name: 'F16', color: 'ffb2ae' },
    { name: 'H9', color: 'd8e1dc' },
    { name: 'H8', color: 'e9d5e1' },
    { name: 'H10', color: 'e6d5e9' },
    { name: 'H4', color: '807b81' },
    { name: 'H3', color: 'aeaeae' },
    { name: 'H11', color: 'd4c9d6' },
    { name: 'H2', color: 'ffffff' },
    { name: 'H7', color: '000000' },
    { name: 'H6', color: '423d43' },
    { name: 'H5', color: '777477' },
    { name: 'H14', color: 'd0d0d0' },
    { name: 'H16', color: '0b060c' },
    { name: 'H15', color: '7f8f95' },
    { name: 'H17', color: 'f4f4f4' },
    { name: 'H18', color: 'fff8e1' },
    { name: 'H19', color: 'fcf0c7' },
    { name: 'M1', color: 'd2dac8' },
    { name: 'M4', color: 'deccbd' },
    { name: 'M7', color: 'c9ac94' },
    { name: 'M10', color: 'd3b3ca' },
    { name: 'M13', color: 'efc6a4' },
    { name: 'M2', color: '7da073' },
    { name: 'M5', color: 'd1c9a9' },
    { name: 'M8', color: 'c59b88' },
    { name: 'M11', color: 'b17cad' },
    { name: 'M14', color: 'e27e52' },
    { name: 'M3', color: '628780' },
    { name: 'M6', color: 'bebd88' },
    { name: 'M9', color: 'a49268' },
    { name: 'M12', color: '635040' },
    { name: 'M15', color: '7f7f7f' },
]