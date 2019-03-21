// Load environment variables from a .env file if one exists
require('dotenv').load()

module.exports = () => {
  const providers = []

  if (process.env.FACEBOOK_ID && process.env.FACEBOOK_SECRET) {
    providers.push({
      providerName: 'Facebook',
      providerOptions: {
        scope: ['email', 'public_profile']
      },
      Strategy: require('passport-facebook').Strategy,
      strategyOptions: {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        profileFields: ['id', 'displayName', 'email', 'link']
      },
      getProfile(profile) {
        // Normalize profile into one with {id, name, email} keys
        return {
          id: profile.id,
          name: profile.displayName,
          email: profile._json.email
        }
      }
    })
  }

  if (process.env.GOOGLE_ID && process.env.GOOGLE_SECRET) {
    providers.push({
      providerName: 'Google',
      providerOptions: {
        scope: ['profile', 'email']
      },
      Strategy: require('passport-google-oauth').OAuth2Strategy,
      strategyOptions: {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      },
      getProfile(profile) {
        // Normalize profile into one with {id, name, email} keys
        return {
          id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        }
      }
    })
  }

  //  **
  //  * Note: Twitter doesn't expose emails by default.
  //  * If we don't get one NextAuth will create a placeholder in the form
  //  * `{provider}-{account-id}@localhost.localdomain`
  //  *
  //  * To have your Twitter oAuth return emails go to apps.twitter.com and add 
  //  * links to your Terms and Conditions and Privacy Policy under the "Settings" 
  //  * tab, then check the "Request email addresses" from users box under the 
  //  * "Permissions" tab. 
  //  **
  if (process.env.TWITTER_KEY && process.env.TWITTER_SECRET) {
    providers.push({
      providerName: 'Twitter',
      providerOptions: {
        scope: []
      },
      Strategy: require('passport-twitter').Strategy,
      strategyOptions: {
        consumerKey: process.env.TWITTER_KEY,
        consumerSecret: process.env.TWITTER_SECRET,
        userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true'
      },
      getProfile(profile) {
        // Normalize profile into one with {id, name, email} keys
        return {
          id: profile.id,
          name: profile.displayName,
          email: (profile.emails && profile.emails[0].value) ? profile.emails[0].value : ''
        }
      }
    })
  }
  
  return providers
}