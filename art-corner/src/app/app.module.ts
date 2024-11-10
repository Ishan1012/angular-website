import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessibilityFeaturesComponent } from './accessibility-features/accessibility-features.component';
import { ExploreComponentsComponent } from './art-gallery/explore-components/explore-components.component';
import { IndexPageComponent } from './art-gallery/index-page/index-page.component';
import { ArtistsProfilesComponent } from './artists-profiles/artists-profiles.component';
import { BlogNewsSectionComponent } from './blog-news-section/blog-news-section.component';
import { CommunityForumComponent } from './community-forum/community-forum.component';
import { EducationalResourcesComponent } from './educational-resources/educational-resources.component';
import { FeedbackAboutUsComponent } from './feedback-about-us/feedback-about-us.component';
import { GeneralCommunityPageComponent } from './community-forum/general-community-page/general-community-page.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment.prod';
import { UserLoginDashboardComponent } from './artists-profiles/user-login-dashboard/user-login-dashboard.component';
import { AdminLoginDashboardComponent } from './artists-profiles/admin-login-dashboard/admin-login-dashboard.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AccessibilityFeaturesComponent,
    ExploreComponentsComponent,
    IndexPageComponent,
    ArtistsProfilesComponent,
    BlogNewsSectionComponent,
    CommunityForumComponent,
    EducationalResourcesComponent,
    FeedbackAboutUsComponent,
    GeneralCommunityPageComponent,
    UserLoginDashboardComponent,
    AdminLoginDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"art-corner-ea8cb","appId":"1:37642620974:web:cbf53d5dd2f16161b34fbf","storageBucket":"art-corner-ea8cb.firebasestorage.app","apiKey":"AIzaSyCIa5AN2mekSI5-VFhl2PFfo7HjGkl6Yg0","authDomain":"art-corner-ea8cb.firebaseapp.com","messagingSenderId":"37642620974","measurementId":"G-8LW0ZS4LT8"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
