'use client'

import React from 'react'
import SidebarMenu from './Components/SidebarMenu'

const page = () => {
  return (
    <div className='w-full h-screen py-navBarPadding'>
      <h1>This is Dashbard</h1>
      <div className='h-screen w-full '>
         <h1>To implement these features for your sales executive and customer calls, you can use cloud-based telephony services. Below are the specific features you need and the service providers that offer them:

Single Outgoing Number for Sales Executives (Unified Caller ID): This ensures that whenever your sales executive calls a client, the number displayed is always the same, regardless of the executive’s device.

Area-based Call Identification: When a customer calls, the system should identify the area the call is coming from, allowing you to route the call to the nearest branch or display relevant information.

Call Routing to Nearest Branch: If a customer calls from a region near a particular branch, the call should automatically route to that branch.

Recommended Service Providers:
1. Twilio
Outgoing Caller ID: You can set a unified caller ID for outgoing calls.
Geolocation-based Call Identification: Twilio allows you to identify the region of the incoming call using area codes or geo-IP services.
Call Routing: You can configure a flow to route incoming calls to the nearest branch using Twilio Studio or Twilio Flex, based on the caller’s location.
2. Plivo
Unified Caller ID: Plivo allows you to set a consistent caller ID for outbound calls.
Call Region Detection: You can use Plivo's call insights to determine the location of the incoming call based on the area code or IP.
Call Routing: Plivo supports call routing to different branches based on the customer’s location.
3. Vonage (Nexmo)
Caller ID Management: Vonage allows you to set a specific caller ID for outgoing calls from your sales team.
Area-based Call Insights: Nexmo provides insights into where the call is coming from based on the phone number.
Call Routing: With Vonage’s programmable voice API, you can route calls to the nearest branch based on the caller’s location.
4. Exotel
Unified Caller ID: Exotel allows for setting a uniform caller ID for outbound calls.
Location Identification: Exotel has built-in location tracking for incoming calls based on the number or call region.
Call Routing: You can configure call routing rules to send incoming calls to the nearest branch based on the caller’s location.
</h1>
      </div>
    </div>
  )
}

export default page
