/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class BasicResponse {
    response: number;
}

export class Group {
    id: number;
}

export class GroupIdsWithCount {
    count: number;
    items: number[];
}

export class Photo {
    id: number;
    albumId?: Nullable<number>;
    ownerId?: Nullable<number>;
    userId?: Nullable<number>;
    text?: Nullable<string>;
    date?: Nullable<number>;
    sizes?: Nullable<Nullable<PhotoSize>[]>;
    width?: Nullable<number>;
    height?: Nullable<number>;
}

export class PhotoSize {
    type?: Nullable<string>;
    url?: Nullable<string>;
    width?: Nullable<number>;
    height?: Nullable<number>;
}

export class CropPhoto {
    photo?: Nullable<Photo>;
    crop?: Nullable<Crop>;
    rect?: Nullable<Rect>;
}

export class Crop {
    x?: Nullable<number>;
    y?: Nullable<number>;
    x2?: Nullable<number>;
    y2?: Nullable<number>;
}

export class Rect {
    x?: Nullable<number>;
    y?: Nullable<number>;
    x2?: Nullable<number>;
    y2?: Nullable<number>;
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    deactivated?: Nullable<string>;
    isClosed: boolean;
    canAccessClosed: boolean;
    about?: Nullable<string>;
    activities?: Nullable<string>;
    bdate?: Nullable<string>;
    blacklisted?: Nullable<boolean>;
    blacklistedByMe?: Nullable<boolean>;
    books?: Nullable<string>;
    canPost?: Nullable<boolean>;
    canSeeAllPosts?: Nullable<boolean>;
    canSeeAudio?: Nullable<boolean>;
    canSendFriendRequest?: Nullable<boolean>;
    canWritePrivateMessage?: Nullable<boolean>;
    career?: Nullable<Career>;
    city?: Nullable<City>;
    commonCount?: Nullable<number>;
    connections?: Nullable<Connections>;
    contacts?: Nullable<Contacts>;
    counters?: Nullable<Counters>;
    country?: Nullable<Country>;
    cropPhoto?: Nullable<CropPhoto>;
    domain?: Nullable<string>;
    education?: Nullable<Education>;
    exports?: Nullable<Nullable<string>[]>;
    firstNameNom?: Nullable<string>;
    firstNameGen?: Nullable<string>;
    firstNameDat?: Nullable<string>;
    firstNameAcc?: Nullable<string>;
    firstNameIns?: Nullable<string>;
    firstNameAbl?: Nullable<string>;
    lastNameNom?: Nullable<string>;
    lastNameGen?: Nullable<string>;
    lastNameDat?: Nullable<string>;
    lastNameAcc?: Nullable<string>;
    lastNameIns?: Nullable<string>;
    lastNameAbl?: Nullable<string>;
    followersCount?: Nullable<number>;
    friendStatus?: Nullable<number>;
    games?: Nullable<string>;
    hasMobile?: Nullable<boolean>;
    hasPhoto?: Nullable<boolean>;
    homeTown?: Nullable<string>;
    interests?: Nullable<string>;
    isFavorite?: Nullable<boolean>;
    isFriend?: Nullable<boolean>;
    isHiddenFromFeed?: Nullable<boolean>;
    lastSeen?: Nullable<LastSeen>;
    lists?: Nullable<string>;
    maidenName?: Nullable<string>;
    military?: Nullable<Military>;
    movies?: Nullable<string>;
    music?: Nullable<string>;
    nickname?: Nullable<string>;
    occupation?: Nullable<Occupation>;
    online?: Nullable<boolean>;
    personal?: Nullable<Personal>;
    photo50?: Nullable<string>;
    photo100?: Nullable<string>;
    photo200Orig?: Nullable<string>;
    photo200?: Nullable<string>;
    photo400Orig?: Nullable<string>;
    photoId?: Nullable<string>;
    photoMax?: Nullable<string>;
    photoMaxOrig?: Nullable<string>;
    quotes?: Nullable<string>;
    relation?: Nullable<number>;
    schools?: Nullable<Nullable<School>[]>;
    screenName?: Nullable<string>;
    sex?: Nullable<number>;
    site?: Nullable<string>;
    status?: Nullable<string>;
    timezone?: Nullable<number>;
    trending?: Nullable<number>;
    tv?: Nullable<string>;
    universities?: Nullable<Nullable<University>[]>;
    verified?: Nullable<boolean>;
    wallDefault?: Nullable<string>;
}

export class Career {
    groupId?: Nullable<number>;
    company?: Nullable<string>;
    countryId?: Nullable<number>;
    cityId?: Nullable<number>;
    city?: Nullable<string>;
    from?: Nullable<number>;
    until?: Nullable<number>;
    position?: Nullable<string>;
}

export class Connections {
    skype?: Nullable<string>;
    livejournal?: Nullable<string>;
}

export class City {
    id?: Nullable<number>;
    title?: Nullable<string>;
}

export class Contacts {
    mobilePhone?: Nullable<string>;
    homePhone?: Nullable<string>;
}

export class Counters {
    albums?: Nullable<number>;
    videos?: Nullable<number>;
    audios?: Nullable<number>;
    notes?: Nullable<number>;
    photos?: Nullable<number>;
    friends?: Nullable<number>;
    groups?: Nullable<number>;
    onlineFriends?: Nullable<number>;
    mutualFriends?: Nullable<number>;
    userVideos?: Nullable<number>;
    followers?: Nullable<number>;
    pages?: Nullable<number>;
}

export class Country {
    id?: Nullable<number>;
    title?: Nullable<string>;
}

export class Education {
    university?: Nullable<number>;
    universityName?: Nullable<string>;
    faculty?: Nullable<number>;
    facultyName?: Nullable<string>;
    graduation?: Nullable<number>;
}

export class LastSeen {
    time?: Nullable<number>;
    platform?: Nullable<number>;
}

export class Military {
    unit?: Nullable<string>;
    unitId?: Nullable<number>;
    countryId?: Nullable<number>;
    from?: Nullable<number>;
    until?: Nullable<number>;
}

export class Occupation {
    type?: Nullable<string>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export class Personal {
    political?: Nullable<number>;
    langs?: Nullable<string>;
    religion?: Nullable<string>;
    inspiredBy?: Nullable<string>;
    peopleMain?: Nullable<number>;
    lifeMain?: Nullable<number>;
    smoking?: Nullable<number>;
    alcohol?: Nullable<number>;
}

export class School {
    id?: Nullable<number>;
    country?: Nullable<number>;
    city?: Nullable<number>;
    name?: Nullable<string>;
    yearFrom?: Nullable<number>;
    yearTo?: Nullable<number>;
    yearGraduated?: Nullable<number>;
    class?: Nullable<string>;
    speciality?: Nullable<string>;
    type?: Nullable<number>;
    typeStr?: Nullable<string>;
}

export class University {
    id?: Nullable<number>;
    country?: Nullable<number>;
    city?: Nullable<number>;
    name?: Nullable<string>;
    faculty?: Nullable<number>;
    facultyName?: Nullable<string>;
    chair?: Nullable<number>;
    chairName?: Nullable<string>;
    graduation?: Nullable<number>;
    educationForm?: Nullable<string>;
    educationStatus?: Nullable<string>;
}

export abstract class IQuery {
    abstract usersGet(
        userIds: string[],
        nameCase?: Nullable<string>,
    ): User[] | Promise<User[]>;

    abstract usersGetFollowers(
        userId: number,
        offset?: Nullable<number>,
        count?: Nullable<number>,
        nameCase?: Nullable<string>,
    ): UsersWithCountAndFriendsCount | Promise<UsersWithCountAndFriendsCount>;

    abstract usersGetSubscriptions(
        userId: number,
        offset?: Nullable<number>,
        count?: Nullable<number>,
        extended?: Nullable<boolean>,
        nameCase?: Nullable<string>,
    ): UserIdsAndGroupIdsWithCount | Promise<UserIdsAndGroupIdsWithCount>;

    abstract usersReport(
        userId: number,
        type: string,
        comment?: Nullable<string>,
    ): BasicResponse | Promise<BasicResponse>;

    abstract usersSearch(
        q: string,
        sort?: Nullable<number>,
        offset?: Nullable<number>,
        count?: Nullable<number>,
        fields?: Nullable<string>,
        city?: Nullable<number>,
        country?: Nullable<number>,
        hometown?: Nullable<string>,
        universityCountry?: Nullable<number>,
        university?: Nullable<number>,
        universityYear?: Nullable<number>,
        universityFaculty?: Nullable<number>,
        universityChair?: Nullable<number>,
        sex?: Nullable<number>,
        status?: Nullable<number>,
        ageFrom?: Nullable<number>,
        ageTo?: Nullable<number>,
        birthDay?: Nullable<number>,
        birthMonth?: Nullable<number>,
        birthYear?: Nullable<number>,
        online?: Nullable<boolean>,
        hasPhoto?: Nullable<boolean>,
        schoolCountry?: Nullable<number>,
        schoolCity?: Nullable<number>,
        schoolClass?: Nullable<number>,
        school?: Nullable<number>,
        schoolYear?: Nullable<number>,
        religion?: Nullable<string>,
        interests?: Nullable<string>,
        company?: Nullable<string>,
        position?: Nullable<string>,
        groupId?: Nullable<number>,
        fromList?: Nullable<string>,
    ): UsersWithCount | Promise<UsersWithCount>;
}

export class UsersWithCount {
    count: number;
    items: User[];
}

export class UserIdsWithCount {
    count: number;
    items: number[];
}

export class UsersWithCountAndFriendsCount {
    count: number;
    friendsCount: number;
    items: User[];
}

export class UserIdsAndGroupIdsWithCount {
    users: UserIdsWithCount;
    groups: GroupIdsWithCount;
}

type Nullable<T> = T | null;
