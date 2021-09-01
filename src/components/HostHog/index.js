import React from 'react'
import { posthogAnalyticsLogic } from 'logic/posthogAnalyticsLogic'
import { useValues } from 'kea'
import { SEO } from '../seo'
import Layout from '../Layout'
import Hero from './Hero'
import Meetups from './Meetups'
import ClimatePledge from './ClimatePledge'

const HostHog = () => {
    useValues(posthogAnalyticsLogic) // mount this logic

    return (
        <Layout>
            <SEO title="HostHog - PostHog Meetups" description="" />
            <main>
                <Hero />
                <Meetups />
                <ClimatePledge />
            </main>
        </Layout>
    )
}

export default HostHog
