import React, { useEffect, useState } from "react";


import { WebView } from "react-native-webview";

export default function SellProduct() {
    return (
        <WebView
            source={{ uri: "https://docs.google.com/forms/d/e/1FAIpQLSe0t2Ph_h74AFCZ_zYx1LPCLCR2aafVtC3De05skbjqd3c7QA/viewform" }}

        />
    );
}


