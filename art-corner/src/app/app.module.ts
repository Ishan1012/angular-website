import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
import { UserLoginDashboardComponent } from './artists-profiles/user-login-dashboard/user-login-dashboard.component';
import { AdminLoginDashboardComponent } from './artists-profiles/admin-login-dashboard/admin-login-dashboard.component';
import { CommunityDescriptionComponent } from './community-forum/community-description/community-description.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ErrorPageComponent } from './accessibility-features/error-page/error-page.component';

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
    AdminLoginDashboardComponent,
    CommunityDescriptionComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
